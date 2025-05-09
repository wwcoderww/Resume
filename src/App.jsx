import React, { useRef } from "react";
import styled from "styled-components";
import Sidebar from "./features/sidebar/Sidebar";
import GlobalStyles from "./styles/GlobalFiles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Banner from "./features/banner/Banner";

// Styles
const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
const MainContent = styled.div`
  display: flex;
  height: 100%;
`;
// Query Client
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});

export default function App() {
  const MainContentRef = useRef(null);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <Container>
        <Banner MainContentRef={MainContentRef} />
        <MainContent>
          <Sidebar />
          <div ref={MainContentRef}>MainContent</div>
        </MainContent>
      </Container>
    </QueryClientProvider>
  );
}
