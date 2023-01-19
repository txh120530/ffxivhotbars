import PropTypes from 'prop-types';
import Job from './Job/Job';
import Tooltip from './Tooltip'
import { useRole } from "../store/RoleContext";

import parse from 'html-react-parser';



const JobList = ({ title, jobs }) => {
    const {role, setRole} = useRole();
    const handleClick = (job) => {
        setRole(job);
    }


    const toolTipContent = (job) => {
            return(
                <div>
                    <b className="block">{job.Name}</b>
                    {job.Weapon ? <b className="mr-2">Tools: {parse(job.Weapon)}</b> : null}
                    {job.Role ? <b >Role: {parse(job.Role)}</b> : null}
                    <hr />
                    {job.Description ? parse(job.Description) : null} 
                </div>
            )
        
    }

  return (
    <div className="mt-3">
      <h4 className='uppercase text-lg'>{title}</h4>
      <ul>
        {jobs.map((job) => (
          <li key={job.Name} value={job.ID}>
            <Tooltip text={toolTipContent(job)} delay=".5" placement="right">
            <button className="w-full" onClick={e => {handleClick(job)}}>
              <Job job={job} />
            </button>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}

JobList.propTypes = {
  title: PropTypes.string.isRequired,
  jobs: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default JobList;
