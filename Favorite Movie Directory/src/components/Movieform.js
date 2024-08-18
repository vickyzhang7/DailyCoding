import React,{useState} from 'react'

function Movieform({ onAddMovie }) {
  const [name,setName]=useState('');
  const [ratings,setRatings]=useState('');
  const [duration,setDuration]=useState('');
  const [error,setError]=useState('');
  const handleAddMovie=()=>{
    if (!name || !ratings || !duration){
      setError("Somthing Wrong")
      return
    }
    const durationRegex = /^(\d+(\.\d+)?)(h|m)$/i;
    if (!durationRegex.test(duration)) {
      setError('Please specify the time in hours or minutes (e.g. 2.5h or 150m).');
      return;
    }
    // Convert duration to hours format
    let durationHours = parseFloat(duration);
    if (duration.toLowerCase().includes('m')) {
      durationHours /= 60;
    }
    
    onAddMovie({ name, ratings, duration: `${durationHours.toFixed(1)} Hrs` });
     // Clear inputs and error
     setName('');
     setRatings('');
     setDuration('');
     setError('');
  }


  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={name}
              onChange={e=>setName(e.target.value)}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={ratings}
              onChange={e=>setRatings(e.target.value)}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              value={duration}
              onChange={e=>setDuration(e.target.value)}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {error && (
            <div 
              className='alert error mb-30'
              data-testid='alert'
            >
              {error}
            </div>
          )}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
              onClick={handleAddMovie}
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
