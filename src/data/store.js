import { types } from 'sass';
import {reactive} from 'vue';

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api/',
  // pivotUrl: 'http://',
  projects: [],
  technologies: [],
  types: [],
  projectTechnologies: [],
});