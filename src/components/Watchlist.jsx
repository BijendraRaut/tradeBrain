import React, { useEffect, useState } from "react";
import millify from "millify";
import { Card, Row, Col, Input } from "antd";

import { serachApiCaller } from "../services/stockApi";

const Watchlist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const fetchSearchTermData = async () => {
    let response = await serachApiCaller(searchTerm);
    console.log("response for search query", response);
    setCompanyList(response.bestMatches);
  };

  const [companyList, setCompanyList] = useState(null);

  useEffect(() => {
    fetchSearchTermData();
  }, [searchTerm]);

  console.log(companyList);

  return (
    <>
      <div className="search-stock">
        <Input
          placeholder="Search Stocks"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* {companyList &&
        companyList.map((company) => {
          return (
            <>
              <div>
                <p>{company["1. symbol"]} </p>
                <button onClick={handleClick}>+</button>
              </div>
              <br />
            </>
          );
        })} */}

      <Row gutter={[32, 32]} className="stock-card-container">
        {companyList?.map((company) => (
          <Col xs={24} sm={12} lg={6} className="stock-card" key={company.id}>
            <Card onclick title={`${company["1. symbol"]}`} hoverable>
              <p>Name: {millify(company["2. name"])}</p>
              <p>Region: {millify(company["4. region"])}</p>

              <p>Match Score: {millify(company["9. matchScore"])}%</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Watchlist;
