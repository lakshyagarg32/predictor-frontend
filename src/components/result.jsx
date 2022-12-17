import { useLocation } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import Select from "react-select";
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
    setAllBranches(() => {
      const a = [];
      a.push({
        label: "All Branches",
        value: "All Branches",
      });
      temp.forEach((branch) => {
        a.push({
          label: branch,
          value: branch,
        });
      });
      a.sort((x, y) => {
        let fa = x.label.toLowerCase(),
          fb = y.label.toLowerCase();
        if (fa == "all branches") {
          return -1;
        }
        if (fb == "all branches") {
          return 1;
        }
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      return a;
    });
    setAllColleges(() => {
      const a = [];
      a.push({
        label: "All Institutes",
        value: "All Institutes",
      });
      temp2.forEach((clg) => {
        a.push({
          label: clg,
          value: clg,
        });
      });
      a.sort((x, y) => {
        let fa = x.label.toLowerCase(),
          fb = y.label.toLowerCase();
        if (fa == "all institutes") {
          return -1;
        }
        if (fb == "all institutes") {
          return 1;
        }
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      return a;
    });
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
              <Select
                styles={{
                  menu: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "31.25rem",
                  }),
                  container: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "12.5rem",
                  }),
                }}
                placeholder="All Institutes"
                options={allColleges}
                onChange={(clg) => {
                  setCurrentPage(1);
                  setCollegeFilter(clg.label);
                }}
              />
            </th>
            <th>
              Academic Program Name<br></br>
              <Select
                styles={{
                  menu: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "31.25rem",
                  }),
                  container: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "12.5rem",
                  }),
                }}
                placeholder="All Branches"
                options={allBranches}
                onChange={(branch) => {
                  setCurrentPage(1);
                  setBranchFilter(branch.label);
                }}
              />
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
