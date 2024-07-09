// ReviewCard.js
import React from 'react';
import { Stack, Typography } from '@mui/material';
import { FaUserCircle, FaStar } from 'react-icons/fa';
import profile from './profile.png';

function ReviewCard({ name, months, rating, feedback }) { // Assuming 'feedback' matches the key in formData
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
        <img src={profile} alt="user" style={{ width: 50, height: 50, borderRadius: '50%' }} />
        <Stack sx={{ width: 100, marginRight: '50px' }}>
          <Typography variant="h6" fontFamily="Marcellus, serif">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" fontFamily="Marcellus, serif">
            {months} months ago
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          {[...Array(4)].map((star, index) => (
            <FaStar key={index} size={20} color={index < rating ? '#FFD700' : '#ccc'} />
          ))}
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
