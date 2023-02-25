import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';


const UserDashAuctionForm = () => {
  const router = useRouter();

  const { userDataOfFocus, userToken, setSelector } = useStateContext();

  const [contractType, setContractType] = useState('space_auction');
  const [startingPrice, setStartingPrice] = useState(10000000000);
  const [discountRate, setDiscountRate] = useState(1);
  const [nft, setNft] = useState('0x8904b64ab06d761607b2a01e8fFdb8F8a8dbA241');
  const [nftId, setNftId] = useState(0);

  const [requestSuccess, setRequestSuccess] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestData = {
      contract_type: contractType,
      contract_constructor_args: {
        _startingPrice: startingPrice,
        _discountRate: discountRate,
        _nft: nft,
        _nftId: nftId
      }
    };
    console.log(requestData);
    // make your API call here with the requestData
    const url = process.env.NEXT_PUBLIC_BE_URL + '/create_auction';
    console.log(url);
    console.log(userToken)
    const res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json','Authorization': userToken},
      body: JSON.stringify(requestData)
    })
    if (!res.ok) {
      setRequestSuccess(true);
      setTimeout(() => router.push({pathname: '/dashboard', query: {token: userToken}}), 3000)
      setSelector('auctions');
    } else {
      setRequestSuccess(true);
      setShowSuccessMsg(true);
      setTimeout(() => router.push({pathname: '/dashboard', query: {token: userToken}}), 3000)
      setSelector('auctions');
    }

  };

  const SuccessMessage = () => {
    return (
      <div>
        <p>Your request has been successful!</p>
      </div>
    );
  };

  const FailMessage = () => {
    return (
      <div>
        <p>Unable to process request...</p>
      </div>
    )
  }

  return (
    <>
      {requestSuccess && showSuccessMsg && (
        <SuccessMessage/>
      )}
      {requestSuccess && !showSuccessMsg && (
        <FailMessage/>
      )}
      {!requestSuccess && !showSuccessMsg && (
        <form onSubmit={handleSubmit}>
          <label>
            Contract Type:
            <input
              type="text"
              value={contractType}
              onChange={(event) => setContractType(event.target.value)}
            />
          </label>
          <br />
          <label>
            Starting Price:
            <input
              type="text"
              value={startingPrice}
              onChange={(event) => setStartingPrice(event.target.value)}
            />
          </label>
          <br />
          <label>
            Discount Rate:
            <input
              type="text"
              value={discountRate}
              onChange={(event) => setDiscountRate(event.target.value)}
            />
          </label>
          <br />
          <label>
            NFT:
            <input
              type="text"
              value={nft}
              onChange={(event) => setNft(event.target.value)}
            />
          </label>
          <br />
          <label>
            NFT ID:
            <input
              type="text"
              value={nftId}
              onChange={(event) => setNftId(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>)}
    </>
  );
}

export default UserDashAuctionForm