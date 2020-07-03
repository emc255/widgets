import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  //SOLVING THE WARNING WITH DEBOUNCED TERM
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 800);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    const searchTerm = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    if (debouncedTerm) {
      searchTerm();
    }
  }, [debouncedTerm]);

  // THIS SOLUTION IS WITH WARNING DEPENDENCY BECAUSE OF RESULT.LEGTH
  // useEffect(() => {
  //   const searchTerm = async () => {
  //     const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
  //       params: {
  //         action: "query",
  //         list: "search",
  //         origin: "*",
  //         format: "json",
  //         srsearch: term,
  //       },
  //     });

  //     setResults(data.query.search);
  //   };

  //   //INITIAL CHECK IF THE USER SEARCH FOR THE FIRST TIME
  //   if (term && !results.length) {
  //     searchTerm();
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         searchTerm();
  //       }
  //     }, 1000);

  //     //USE EFFECT BUILT-IN FUNCTION/ADDON
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input onChange={(e) => setTerm(e.target.value)} value={term} className="input" />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
