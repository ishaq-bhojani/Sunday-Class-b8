import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const addTodo = createAsyncThunk("todo/addTodo", async (data) => {
  try {
    const id = new Date().getTime();
    await setDoc(doc(db, "todo", `${id}`), { id, ...data });
    // const todoRef = await addDoc(collection(db, "todo"), data);
    // console.log("Document written with ID: ", todoRef.id);
  } catch (e) {
    console.log(e);
  }
});

const getTodo = createAsyncThunk("todo/getTodo", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "todo"));
    const allTodo = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      allTodo.push(doc.data());
    });
    console.log(allTodo);
    return allTodo;
  } catch (e) {
    console.log(e);
    return e;
  }
});

const doneTodo = createAsyncThunk("todo/update", async ({ id, isDone }) => {
  try {
    const todoRef = doc(db, "todo", `${id}`);
    await updateDoc(todoRef, {
      done: isDone,
    });
  } catch (e) {
    console.log(e);
  }
});

const initialState = {
  isLoading: false,
  list: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // addTodo: (state, action) => {
    //   const todoObj = {
    //     done: false,
    //     text: action.payload,
    //   };
    //   state.push(todoObj);
    // },
    doneTodo: (state, action) => {
      state[action.payload].done = !state[action.payload].done;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(getTodo.rejected, (state, action) => {
      state.isLoading = false;
    });
   
    builder.addCase(doneTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doneTodo.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(doneTodo.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

// export const { doneTodo } = todoSlice.actions;

export { addTodo, getTodo, doneTodo };

export default todoSlice.reducer;
