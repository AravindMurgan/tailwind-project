import React from 'react';

function JobCard(props) {
    const { company, location, experience, salary, timing, employes, jobTitle } = props;
    return (
        <div className="flex justify-center bg-black">
            <div className="block max-w-3xl rounded-lg bg-white text-center shadow-lg white:bg-neutral-700">
                <div className='flex flex-row p-3'>
                    <div className='items-start mt-8'>
                        <img src="/images/netflix.png" alt="My Image" className="w-14 h-14 rounded-lg" />
                    </div>
                    <div className="p-6">
                        <h5 className="text-2xl text-start font-medium text-neutral-800 white:text-neutral-50">
                            {jobTitle}
                        </h5>
                        <h5 className="text-xl text-start font-medium text-neutral-800 white:text-neutral-50">
                            {company}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 white:text-neutral-200 text-start">
                            {location}
                        </p>
                        <div className='flex flex-col space-y-8 justify-start items-start'>
                            <div className='text-start space-y-2'>
                                <p>{`Part-time ( ${timing} IST )`}</p>
                                <p>{`Experience (${experience} years)`}</p>
                                <p>{`INR ($) ${salary} /Month`}</p>
                                <p>{`${employes} employes`} </p>
                            </div>

                            <div className='space-x-7'>
                                <button type="button" className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase 
                  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 
                  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                  focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
                  0_4px_18px_0_rgba(59,113,202,0.2)] rounded-lg" data-te-ripple-init data-te-ripple-color="light">
                                    Apply Now
                                </button>
                                <button type="button" className="inline-block rounded bg-white border-2 border-blue-300 
                  px-2 pt-2.5 pb-2 text-xs font-medium 
                  uppercase leading-normal text-blue-400 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
                  hover:bg-blue-50 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] rounded-lg"
                                >
                                    External Apply
                                </button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
