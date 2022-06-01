// what we done here is create actions or action creator
//When we need to export many things we use export without default keyword
export const selectLibrary = libraryId => {
  return {
    type: 'select_library',
    payload: libraryId,
  };
};
