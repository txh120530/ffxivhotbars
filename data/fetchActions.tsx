import axios from 'axios';


const baseUrl = 'https://xivapi.com';


export async function fetchJobActions(job) {
  const isPvP = ['DOM', 'DOW'].includes(job.Discipline) ? 'IsPvP=0,' : '';
  const endpoint = `search?indexes=Action,CraftAction&filters=${isPvP}ClassJobTargetID`;
  let jobActions = [];
 

try{
    const response = await axios({
        method: 'GET',
        url: `${baseUrl}/${endpoint}=${job.ID}`
      }); 
      jobActions = response.data.Results; 
} catch (error) {
    if (error.response){
        console.log(error)
    }
}
return jobActions

}

export async function fetchGeneralActions() {
    const endpoint = `GeneralAction`;
    let generalActions = [];

    try{
        const response = await axios({
            method: 'GET',
            url: `${baseUrl}/${endpoint}`
          }); 
          generalActions = response.data.Results; 
    } catch (error) {
        if (error.response){
            console.log(error)
        }
    }
    return generalActions
    
  }
  

export async function fetchSingleAction(action, type){
    const endpoint = `${type}/${action.ID}`;
    let actionInfo = {};

    try{
        const response = await axios({
            method: 'GET',
            url: `${baseUrl}/${endpoint}`
          }); 
          actionInfo = response.data; 
    } catch (error) {
        if (error.response){
            console.log(error)
        }
    }
    return actionInfo;
}

export async function getContent(type, id) {
  const req = `${baseUrl}/${type}/${id}`;
  const content = await fetch(req).then((res) => res.json());
  return content;
}

const moduleExports = {
  fetchJobActions,
  fetchGeneralActions,
  fetchSingleAction,
  getContent
};

export default moduleExports;
