export const getSavedPollIds = () => {
  const savedPollIds = localStorage.getItem('saved_Polls')
    ? JSON.parse(localStorage.getItem('saved_Polls'))
    : [];

  return savedPollIds;
};

export const savePollIds = (pollIdArr) => {
  if (pollIdArr.length) {
    localStorage.setItem('saved_polls', JSON.stringify(pollIdArr));
  } else {
    localStorage.removeItem('saved_polls');
  }
};

export const removePollId = (pollId) => {
  const savedPollIds = localStorage.getItem('saved_polls')
    ? JSON.parse(localStorage.getItem('saved_polls'))
    : null;

  if (!savedPollIds) {
    return false;
  }

  const updatedSavedPollIds = savedPollIds?.filter((savedPollId) => savedPollId !== pollId);
  localStorage.setItem('saved_polls', JSON.stringify(updatedSavedPollIds));

  return true;
};