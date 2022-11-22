import { configureStore } from '@reduxjs/toolkit';
import mailSlicer from '../features/mailSlicer';

export const store = configureStore({
  reducer: {
    mail: mailSlicer,
  },
});
