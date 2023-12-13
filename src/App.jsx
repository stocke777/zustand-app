import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './Child1'
import { useMainContext } from './mainContext'
import DataFetchingComponent from './ReactQueryComponent'
import { useQueryClient, QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 10000 }}
})

function App() {
  const { state } = useMainContext();

  console.log("App refresh", state)

  return (
    <>
      {/* <Child1 /> */}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        {/* <DataFetchingComponent /> */}
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/posts" element={<DataFetchingComponent type={'posts'}/>} />
              <Route path="/users" element={<DataFetchingComponent type={"users"}/>} />
            </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
