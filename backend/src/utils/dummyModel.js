// backend/src/utils/dummyModels.js
const analyze = (cvText) => {
  return {
    summary: "CV shows strong skills in front-end development.",
    topSkills: ['HTML', 'CSS', 'JavaScript'],
    recommendations: ['React', 'TailwindCSS']
  };
};

const match = (cvText) => {
  return {
    matchedJobs: [
      { id: 2, title: 'Frontend Developer', score: 87 },
      { id: 1, title: 'Data Analyst', score: 64 },
    ]
  };
};

module.exports = { analyze, match };
