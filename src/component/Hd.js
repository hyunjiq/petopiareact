import React from 'react'
import { Link } from 'react-router-dom';
import { Styleicon } from './style';
import logo from "../svg/logo.svg"
import gnbdata from "../data/db2.json"

function Hd() {

    const { gnb } = gnbdata;
    

    return (
        <header className="hd d-flex justify-content-between position-fixed align-items-center px-5">
        <h1 className="mb-0">
          <a className="d-block" href="#">
            <img className="d-block" src={logo} alt="와요로고"/>
          </a>
        </h1>
        <ul className="d1 d-flex mb-0 p-0 ">
            {
                gnb.map((v, i)=>{
                    return(
                        <li className="d1_li position-relative" key={"gnbnavi"+i}>
                            <Link className="d1_a" to={`/${v.href}`}>{v.text}</Link>
                            
                                {
                                    v.d2_li  &&   v.d2_li.length > 0 ? 
                                    <ul class="d2 position-absolute ps-0">
                                    {
                                        v.d2_li.map((vv, ii)=>{
                                            return(
                                                <li class="d2_li">
                                                    <Link to={`/${vv.href}`}>{vv.text}</Link>
                                                </li>
                                            )   
                                        })
                                    }
                                    </ul>
                                    : null
                                }
                        </li>
                        
                    )
                })
            }            
        </ul>
        <ul className="d-flex lnb mb-0 p-0">
            <li className="mx-2 searchIcon d-flex">
                <form className="form-show d-none border me-3 position-absolute">
                    <button className="btncls" href="#">                        
                        <Styleicon content='\f52a'><span className="visually-hidden">검색</span></Styleicon>   
                    </button>
                    <input type="text" className="form-control search-pc" placeholder="검색어 입력"/>
                </form>
                <button className="btncls searchBtn" href="#" onClick={()=>{
                    document.querySelector(".form-show").classList.remove("d-none");
                    document.querySelector(".form-show").classList.add("d-flex");
                    document.querySelector(".searchBtn").classList.add("d-none");
                    document.querySelector(".xBtn").classList.remove("d-none");
                }}>
                    <Styleicon content='\f52a'><span className="visually-hidden">검색</span></Styleicon>   
                </button>
                <button className="btncls d-none xBtn" href="#" onClick={()=>{
                    document.querySelector(".form-show").classList.add("d-none");
                    document.querySelector(".form-show").classList.remove("d-flex");
                    document.querySelector(".searchBtn").classList.remove("d-none");
                    document.querySelector(".xBtn").classList.add("d-none");
                }}>
                    <Styleicon content='\f659'><span className="visually-hidden">닫기</span></Styleicon> 
                </button>
            </li>
            <li className="mx-2 personIcon">
                <Link to="#">
                    <Styleicon content='\f4e1'><span className="visually-hidden">로그인</span></Styleicon>
                </Link>
            </li>
        </ul>     
    </header>
    );
}

export default Hd
