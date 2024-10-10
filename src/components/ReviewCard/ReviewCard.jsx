import React from 'react';
import { Stack, Typography } from '@mui/material';
import profile from './assets/images/profile.png';

function ReviewCard({ name, createdAt, feedback }) {
  // Function to calculate the difference in months between the review date and the current date
  const calculateTimeAgo = (reviewDate) => {
    const usTimeZone = 'America/New_York'; // You can adjust this to any other US time zone
    
    // Create the current date in the desired US time zone
    const currentDateObj = new Date().toLocaleString('en-US', { timeZone: usTimeZone });

    const currentDate = new Date(currentDateObj);
    const reviewDateObj = new Date(reviewDate);
    const timeDiffInSeconds = Math.floor((currentDate - reviewDateObj) / 1000); // Get time difference in seconds
  
    // Calculate various time units
    const seconds = timeDiffInSeconds;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // Approximate month length
    const years = Math.floor(days / 365); // Approximate year length
  
    // Return the most appropriate time unit
    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 30) return `${days} days ago`;
    if (months < 12) return `${months} months ago`;
    return `${years} years ago`;
  };
  

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        width: '100%',
        maxWidth: 600,
        margin: '5px auto',
        padding: 2,
        backgroundColor: '#fff',
        border: '1px solid black',
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <img
          src={profile}
          alt="user"
          style={{ width: 50, height: 50, borderRadius: '50%' }}
        />
        <Stack sx={{ width: 100, marginRight: '50px' }}>
          <Typography variant="h6" fontFamily="Marcellus, serif">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" fontFamily="Marcellus, serif">
            {calculateTimeAgo(createdAt)} {/* Display the number of months ago */}
          </Typography>
        </Stack>
      </Stack>

      {/* Display feedback/comment */}
      <Typography variant="body1" fontFamily="Marcellus, serif" sx={{ marginTop: 2 }}>
        {feedback} {/* Ensure 'feedback' matches the prop key */}
      </Typography>
    </Stack>
  );
}

export default ReviewCard;
