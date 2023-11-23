import React, { useState } from "react";
import styles from "../styles/components/sortBy.module.scss";

interface FilterComponentProps {
  category: string;
  onFilter: (filter: string) => void;
}

const sortBy: React.FC<FilterComponentProps> = ({ category, onFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    onFilter(filter);
  };

  return (
    <div>
      <div className={styles.filter}>
        <span> Sort by: </span>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Best Rating</button>
          <div className={styles.dropdownContent}>
            <a onClick={() => handleFilterChange("rating")}>Best Rating</a>
            <a onClick={() => handleFilterChange("highest")}>Highest Price</a>
            <a onClick={() => handleFilterChange("lowest")}>Lowest Price</a>
            {/* <a onClick={() => handleFilterChange("reviews")}>Most Reviews</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default sortBy;
