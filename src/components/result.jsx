import { useLocation } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import Pagination from "./table/Pagination";
import "./result.css";

let PageSize = 8;

function Result() {
  const { state } = useLocation();
  const { result } = state; // Read values passed on state
  const [currentPage, setCurrentPage] = useState(1);
  const [allBranches, setAllBranches] = useState([]);
  const [allColleges, setAllColleges] = useState([]);
  const [disp, setDisp] = useState([...result]);
  const [branchFilter, setBranchFilter] = useState("All Branches");
  const [collegeFilter, setCollegeFilter] = useState("All Institutes");
  useEffect(() => {
    const temp = new Set();
    const temp2 = new Set();
    for (let i = 0; i < result.length; i++) {
      temp.add(result[i].branch);
      temp2.add(result[i].institute);
    }
    const a = Array.from(temp);
    const b = Array.from(temp2);
    a.sort();
    b.sort();
    setAllBranches(a);
    setAllColleges(b);
  }, []);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < result.length; i++) {
      if (
        (result[i].branch == branchFilter || branchFilter == "All Branches") &&
        (result[i].institute == collegeFilter ||
          collegeFilter == "All Institutes")
      ) {
        arr.push(result[i]);
      }
    }
    setDisp(arr);
  }, [branchFilter, collegeFilter]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return disp.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, disp]);
  return (
    <div className="result">
      <table>
        <thead>
          <tr>
            <th>
              Institute<br></br>
              <select
                onChange={(i) => {
                  setCollegeFilter(i.target.value);
                  setCurrentPage(1);
                }}
              >
                <option>All Institutes</option>
                {allColleges.map((college) => {
                  return <option key={college}>{college}</option>;
                })}
              </select>
            </th>
            <th>
              Academic Program Name<br></br>
              <select
                onChange={(i) => {
                  setBranchFilter(i.target.value);
                  setCurrentPage(1);
                }}
              >
                <option>All Branches</option>
                {allBranches.map((branch) => {
                  return <option key={branch}>{branch}</option>;
                })}
              </select>
            </th>
            <th>Quota</th>
            <th>Seat Type</th>
            <th>Gender</th>
            <th>Opening Rank</th>
            <th>Closing Rank</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.institute}</td>
                <td>{item.branch}</td>
                <td>{item.quota}</td>
                <td>{item.category}</td>
                <td>{item.gender}</td>
                <td>{item.opening_rank}</td>
                <td>{item.closing_rank}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={disp.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Result;
