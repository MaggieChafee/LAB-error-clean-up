import htmlStructure from '../components/shared/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/buttons/startSortingBtn';
import events from '../components/events/formEvents';
import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line - DONE
import filterEvents from '../components/events/filterEvents';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  filterEvents();
  events(); // always load last
};

startApp();
