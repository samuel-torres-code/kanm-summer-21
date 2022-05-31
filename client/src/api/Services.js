/*  root services ⚓️ .. */

// import axios from 'axios';


// Variables
const API_URL = 'http://yourapi.com/api/';
const headers = { 'Content-Type': 'application/json' };

// Example API Calls
//  const add = (data) => axios.post(`${API_URL}/form`, data, { headers });

//  const getData = () => axios.get(`${API_URL}/hotels`, { headers });

// Temp Test Data for Shows
const getShows =
  [
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 0, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 1, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 2, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 3, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 4, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 5, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 6, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 7, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 8, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 9, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 10, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: 1, showName: "Sam's Show", genre: "Breakbeat", weekday: "friday", hour: 11, image: "https://4.bp.blogspot.com/_Y4Ao_KEr11k/TUnGfIhC7RI/AAAAAAAAAHU/OIi31pm6quE/s1600/Small+Face+Cat.jpg", dj: "Sam", specialty: true },
    { id: 2, showName: "Liam's Show", genre: "Duster", weekday: "friday", hour: 12, image: "https://4.bp.blogspot.com/_Y4Ao_KEr11k/TUnGfIhC7RI/AAAAAAAAAHU/OIi31pm6quE/s1600/Small+Face+Cat.jpg", dj: "Liam", specialty: true },
    { id: 3, showName: "Josh's Show", genre: "Electronic", weekday: "friday", hour: 13, image: "https://4.bp.blogspot.com/_Y4Ao_KEr11k/TUnGfIhC7RI/AAAAAAAAAHU/OIi31pm6quE/s1600/Small+Face+Cat.jpg", dj: "Josh", specialty: true },
    { id: 4, showName: "Miguel's Show", genre: "Chill", weekday: "friday", hour: 14, image: "https://4.bp.blogspot.com/_Y4Ao_KEr11k/TUnGfIhC7RI/AAAAAAAAAHU/OIi31pm6quE/s1600/Small+Face+Cat.jpg", dj: "Miguel", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 15, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 16, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 17, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 18, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 19, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 20, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 21, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 22, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true },
    { id: -1, showName: "Automated Programming", genre: "Mandatory", weekday: "friday", hour: 23, image: "https://www.ecsite.eu/sites/default/files/robot_example_2.jpg", dj: "Ben the AutoDJ", specialty: true }
  ];



export {
  //  add,
  //  getData
  getShows

};

