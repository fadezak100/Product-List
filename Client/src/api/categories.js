import axios from './axios';

const getCategories = () => axios.get('category/');

const sortByCategories = (category, sort) => {
  if (sort === 'price' || sort === 'name')
    return axios.get(`search/${category}/?q=${sort}`);
  else return axios.get(`search/${category}/`);
};

const sortByAttribute = (attribute) => axios.get(`search/sort/${attribute}`);

export { getCategories, sortByCategories, sortByAttribute };
