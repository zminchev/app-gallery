import React, { useState, useRef, useEffect } from "react";
import "../styles/Dashboard.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useAuth } from "../auth/AuthProvider";
import { supabase } from "../supabase";
import Button from "./Button";

function Dashboard() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const usernameRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const websiteRef = useRef();
  const { user } = useAuth();

  let loaderStyle = {
    color: "white",
    width: "20",
    height: "20",
  };

  async function getUserName() {
    const { data } = await supabase
      .from("profiles")
      .select("username")
      .eq("id", user?.id);
    const { data: firstName } = await supabase
      .from("profiles")
      .select("first_name")
      .eq("id", user?.id);
    const { data: lastName } = await supabase
      .from("profiles")
      .select("last_name")
      .eq("id", user?.id);
    setUserName(data[0].username);
    setUserFirstName(firstName[0].first_name);
    setUserLastName(lastName[0].last_name);
  }
  async function updateProfile() {
    setIsLoading(true);
    const username = usernameRef.current.value;
    const fname = fnameRef.current.value;
    const lname = lnameRef.current.value;
    const website = websiteRef.current.value;

    getUserName();

    setError("");
    setSuccess("");
    const { error } = await supabase.from("profiles").upsert({
      id: user?.id,
      username: username,
      first_name: fname,
      last_name: lname,
      website: website,
    });

    if (error) {
      setSuccess("");
      setError(error.message);
      setIsLoading(false);
    } else {
      setError("");
      setSuccess("Changes saved successfully.");
      usernameRef.current.value = "";
      fnameRef.current.value = "";
      lnameRef.current.value = "";
      websiteRef.current.value = "";
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getUserName();
  }, [userName, userFirstName, userLastName]);

  return (
    <div className="account-page">
      <div className="profile-container">
        <div className="avatar-container">
          <div className="avatar"></div>
        </div>
        <div className="user-info">
          <div className="names">
            <p>
              {userFirstName} {userLastName}
            </p>
            <small>{userName}</small>
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="notification-handling">
          <div className={success ? "success" : null}>{success}</div>
          <div className={error ? "error" : null}>{error}</div>
        </div>
        <div className="container">
          <div className="header">
            <label>General</label>
          </div>
          <div className="sub-header">
            <div className="sub-header-content">
              <label>Username</label>
              <input type="text" id="username" ref={usernameRef}></input>
            </div>
            <div className="sub-header-content">
              <label>First name</label>
              <input type="text" id="fname" ref={fnameRef}></input>
            </div>
            <div className="sub-header-content">
              <label>Last name</label>
              <input type="text" id="lname" ref={lnameRef}></input>
            </div>
            <div className="sub-header-content">
              <label>Website</label>
              <input type="text" id="website" ref={websiteRef}></input>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header">
            <label>Security</label>
          </div>
          <div className="sub-header">
            <div className="sub-header-content">
              <label>Password</label>
              <input type="password" id="password"></input>
            </div>
            <div className="sub-header-content">
              <label>Confirm new password</label>
              <input type="password" id="c-password"></input>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Button
            onClick={updateProfile}
            id="save-btn"
            disabled={isLoading}
            value={
              isLoading ? (
                <div className="button-loader">
                  <span className="loader-btn">
                    <AiOutlineLoading3Quarters style={loaderStyle} />
                  </span>
                </div>
              ) : (
                "Save"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
