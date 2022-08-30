import React from 'react'
import { useRecoilState } from "recoil";
import { commentsState, userState, vendorsState } from '../atoms/adminAtom';
import { VendorStyle } from '../styles/VendorStyle';
import FilterToggle from './FilterToggle';
import Header from './Header';

export const Admin = () => {

  const [vendorActive] = useRecoilState(vendorsState);
  const [userActive] = useRecoilState(userState);
  const [commentActive] = useRecoilState(commentsState);
  return (
    <>
     <Header admin/>
    <FilterToggle admin/>
    {vendorActive && 
    <>
    <VendorStyle>
    <p>this is for vendors</p>
    </VendorStyle>
    </>
    }
    {userActive && 
        <>
        <VendorStyle>
        <p>this is for user</p>
        </VendorStyle>
        </>
    }
    {commentActive &&
     <>
     <VendorStyle>
     <p>this is for comments</p>
     </VendorStyle>
     </>
     }
    </>
  )
}
