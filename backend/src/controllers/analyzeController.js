// backend/src/controllers/analyzeController.js
const dummyModel = require('../utils/dummyModel');

const analyzeCV = async (request, h) => {
  const { cv } = request.payload;

  // Gunakan dummy model sementara
  const result = dummyModel.analyze(cv);

  return h.response(result).code(200);
};

const getJobs = async (request, h) => {
  // Simulasi data lowongan
  const jobs = [
    { id: 1, title: 'Data Analyst', skills: ['SQL', 'Python'] },
    { id: 2, title: 'Frontend Developer', skills: ['React', 'CSS'] },
    { id: 3, title: 'UI/UX Designer', skills: ['Figma', 'Design Thinking'] },
  ];
  return h.response(jobs).code(200);
};

const matchCV = async (request, h) => {
  const { cv } = request.payload;
  const result = dummyModel.match(cv);
  return h.response(result).code(200);
};

module.exports = { analyzeCV, getJobs, matchCV };
