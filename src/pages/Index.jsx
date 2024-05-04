import { useState } from "react";
import { Container, VStack, Button, Text, Input, useToast, Heading } from "@chakra-ui/react";
import { FaWallet, FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [tradeDetails, setTradeDetails] = useState("");
  const toast = useToast();

  const connectWallet = () => {
    // Simulate wallet connection
    setWalletConnected(true);
    toast({
      title: "Wallet connected.",
      description: "Your wallet is successfully connected to the app.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleTrade = () => {
    if (!walletConnected) {
      toast({
        title: "Wallet not connected.",
        description: "Please connect your wallet before trading.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    // Simulate trade execution
    toast({
      title: "Trade executed.",
      description: `Trade details: ${tradeDetails}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>MEV Bot for Solana</Heading>
        <Button leftIcon={<FaWallet />} colorScheme="teal" variant="solid" onClick={connectWallet} isDisabled={walletConnected}>
          {walletConnected ? "Wallet Connected" : "Connect Wallet"}
        </Button>
        <Input placeholder="Enter trade details" value={tradeDetails} onChange={(e) => setTradeDetails(e.target.value)} />
        <Button leftIcon={<FaExchangeAlt />} colorScheme="blue" onClick={handleTrade}>
          Execute Trade
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
