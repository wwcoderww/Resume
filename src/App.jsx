import React from "react";
import styled from "styled-components";
import Sidebar from "./features/sidebar/Sidebar";
import GlobalStyles from "./styles/GlobalFiles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Banner from "./features/banner/Banner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Budget from "./features/budget/Budget";
import MoreBookmarks from "./features/morebookmarks/MoreBookmarks";

// Styles
const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;
const MainContent = styled.div`
  display: flex;
  height: 100%;
  background-color: var(--third-color);
`;
// Query Client
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});
// React Router
const router = createBrowserRouter([
  { path: "/", element: <MoreBookmarks /> },
  { path: "/budget", element: <Budget /> },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <MainContainer>
        <Banner />
        <MainContent>
          <Sidebar />
          <RouterProvider router={router}></RouterProvider>
        </MainContent>
      </MainContainer>
    </QueryClientProvider>
  );
}
