const addWorkoutBtn = document.querySelector('#addWorkoutBtn');

// create a workout that serves as the main card for the "Create a Workout" functionality 
const createWorkout = async () => {
    try {
    const date_created = new Date();
    const name = 'Chest';
    const workout_duration = null;
      const response = await fetch('/api/workouts/myWorkouts', {
        method: 'POST',
        body: JSON.stringify({ name, date_created, workout_duration }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        const workout = await response.json();
        console.log('Workout created:', workout);
        document.location.replace('/addWorkouts');
      } else {
        console.error('Failed to create workout');
        alert('Failed to create workout');

      }
    } catch (error) {
      console.error('Error creating workout:', error);
    }
  };

  addWorkoutBtn.addEventListener('click', createWorkout);

