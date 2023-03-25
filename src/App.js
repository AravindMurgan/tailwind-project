import JobCard from './JobCard';


function App() {
  return (
    <div>
      <JobCard
        company='Great Vibes - Information Technology'
        position=''
        location='Chennai,Tamilnadu,India (In-office)'
        experience='1-2'
        salary='4000-5000'
        timing='9.00 am - 6.00 pm'
        employes='51-200'
        jobTitle='UI UX Designer'
        ImageUrl='/images/netflix.png'
        ImageWidth='14'
        ImageHeight='14'
      >
      </JobCard>
    </div>

  );
}
export default App;