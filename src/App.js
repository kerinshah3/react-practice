import ExcuseApp from "./component/api-call/ExcuseApp";
import Profile from "./component/Profile"
import NavBar from "./component/NavBar";
import React, {useState , createContext } from "react";
import {BrowserRouter as Router , Routes , Route ,useNavigate} from "react-router-dom";
import AxiosFetchAPIData from "./component/api-call/AxiosFetchAPIData";
import {QueryClient , QueryClientProvider} from "@tanstack/react-query";
import ReactQueryAPI from "./component/use-query/ReactQueryAPI";
import SignUp from "./component/react-hook-form/SignUp";
import AxiosFetchAPIDataForCustomHooks from "./component/custom-hooks/AxiosFetchAPIDataForCustomHooks";

export const AppContext =createContext();

function App() {
    const queryClient = new QueryClient({
         defaultOptions:{
             queries:{
                 refetchOnWindowFocus: false // Default true
             }
         }
    })
    // small changes to check commit works or not
    const [userName , setUserName] = useState("Kerin shah")
  return (
      <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{userName , setUserName}}>
      <Router>
      <NavBar/>
          <Routes>
              <Route path="/" element={<AxiosFetchAPIData/>}></Route>
          </Routes>
          <Routes>
              <Route path="excuseApp" element={<ExcuseApp/>}></Route>
          </Routes>
          <Routes>
              <Route path="profile" element={<Profile/>}></Route>
          </Routes>
          <Routes>
              <Route path="reactQuery" element={<ReactQueryAPI/>}></Route>
          </Routes>
          <Routes>
              <Route path="signUp" element={<SignUp/>}></Route>
          </Routes>
          <Routes>
              <Route path="customHooks" element={<AxiosFetchAPIDataForCustomHooks/>}></Route>
          </Routes>
      </Router>
      </AppContext.Provider>
      </QueryClientProvider>
  );
}

export default App;