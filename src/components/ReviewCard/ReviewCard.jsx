import React from 'react';
import { Stack, Typography } from '@mui/material';
import profile from './assets/images/profile.png';

function ReviewCard({ name, createdAt, feedback }) {
  const calculateTimeAgo = (reviewDate) => {

    const gmtTimeZone = 'UTC'; // You can adjust this to any other US time zone
    
    // Create the current date in the desired US time zone
    const currentDateObj = new Date().toLocaleString('en-US', { timeZone: gmtTimeZone });

    const currentDate = new Date(currentDateObj);
    const reviewDateObj = new Date(reviewDate);
    const timeDiffInSeconds = Math.floor((currentDate - reviewDateObj) / 1000);
  
    const seconds = timeDiffInSeconds;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
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
        padding: 1,
        backgroundColor: '#fff',
        border: '1px solid black',

        wordWrap: 'break-word', // Ensures text breaks at the end of the line
        overflowWrap: 'break-word', // Alternative property for older browsers

//         borderRadius: '8px', // Optional: Add some rounding for aesthetics
//         '@media (max-width: 768px)': {
//           width: '90%', // Adjust width on smaller screens
//           padding: '16px',
//         },

      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
        <img
          src={profile}
          alt="user"
          style={{ 
            width: 50, 
            height: 50, 
            borderRadius: '50%',
            '@media (max-width: 768px)': {
              width: 40,  // Smaller image for smaller screens
              height: 40,
            },
          }}
        />
        <Stack sx={{ width: 'auto', flex: 1 }}>
          <Typography variant="h6" fontFamily="Marcellus, serif" sx={{textAlign: 'left'}}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" fontFamily="Marcellus, serif">
            {calculateTimeAgo(createdAt)}

          </Typography>
        </Stack>
      </Stack>

      {/* Display feedback/comment */}
      <Typography 
        variant="body1" 
        fontFamily="Marcellus, serif" 

        sx={{ marginTop: 2, wordWrap: 'break-word', overflowWrap: 'break-word',textAlign: 'left' }} // Ensure long words break
      >
        {feedback}

      </Typography>
    </Stack>
  );
}

export default ReviewCard;
