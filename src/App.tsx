import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import SendMoney from "./pages/dashboard/sendMoney";
import WithdrawMoney from "./pages/dashboard/withdrawMoney";
import Transaction from "./pages/dashboard/transaction";
import Settings from "./pages/dashboard/settings";

const app = () => {
  return (
    <Flex direction="column" color="white" bg="#0F1010" w="100%">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/">
          <Route path="/login/" element={<Dashboard />} />
          <Route path="/login/send-money" element={<SendMoney />} />
          <Route path="/login/withdraw-money" element={<WithdrawMoney />} />
          <Route path="/login/transaction" element={<Transaction />} />
          <Route path="/login/settings" element={<Settings />} />
        </Route>
      </Routes>
      <Footer />
    </Flex>
  );
};

export default app;
