import React, { useReducer, createContext } from "react";
export const Context = createContext();

// Global State
const initialState = {
  socialMediaLinks: {
    resume: "#",
    linkedIn: "http://linkedin.com/in/saranrajshri",
    github: "http://github.com/saranrajshri",
    leetCode: "https://leetcode.com/saranrajshri/",
    codeChef: "https://www.codechef.com/users/saranrajshri",
    hackerRank: "https://www.hackerrank.com/shrisaranraj",
    email: "shrisaranraj2001@gmail.com",
  },
  projects: [
    {
      date: "May 2020",
      title: "Postman-ify (Postman Clone)",
      descriptionParagraph1:
        "A Duplicate version of Postman desktop app built on top of Electron and React. This application can be used test API's.",
      descriptionParagraph2:
        "Some of the features of this application are Working on multiple tabs, test GET and POST methods, View response JSON data, etc.",
      sourceCodeLink: "https://github.com/saranrajshri/Postman-Clone",
    },
    {
      date: "April 2020",
      title:
        "Sentiment Analaysis and Visualization Dashboard On Covid-19 Tweets",
      descriptionParagraph1:
        "This is one of the award winning projects of IBM Hack Challenge 2020.",
      descriptionParagraph2:
        "This application is used to collect the live tweets about COVID-19. It analyzes the data and visualizes the current sentiment and emotion levels of the people in India.",
      sourceCodeLink: "https://github.com/saranrajshri/tweezy",
    },
    {
      date: "March 2020",
      title: "Algorithm Visualization Gallery",
      descriptionParagraph1:
        "An interactive react-based application that shows how algorithms works by animating each and every step.",
      descriptionParagraph2:
        "It consists of various algorithms such as Sorting, Searching, Backtracking, Dynamic Programming, etc",
      sourceCodeLink: "https://github.com/saranrajshri/Algorithm-Visualizer",
    },
    {
      date: "Septemeber 2019",
      title: "Friend Affinity Finder",
      descriptionParagraph1:
        "Selected as one of the top 30 projects of IBM Hack Challenge 2019.",
      descriptionParagraph2:
        "A web-based application that finds the person matching to your character and interests  using Machine Learning.",
      sourceCodeLink: "https://github.com/saranrajshri/IBM-Hack-Challenge-2019",
    },
  ],
};

// Reducers
const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error();
  }
};

// Context Provider
export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};
