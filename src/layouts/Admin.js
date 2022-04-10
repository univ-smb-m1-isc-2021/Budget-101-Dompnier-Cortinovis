import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";

import HeaderStats from "components/Headers/HeaderStats.js";


// views

import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import NewCagnotte from "views/admin/NewCagnotte.js";
import EditCagnotte from "views/admin/EditCagnotte.js";
import NewDepense from "views/admin/NewDepense.js";

export default function Admin() {
  return (
    <>
      <div >
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/cagnotte/new" exact component={NewCagnotte} />
            <Route path="/admin/cagnotte/edit" exact component={EditCagnotte} />
            <Route path="/admin/depense/new" exact component={NewDepense} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          
        </div>
      </div>
    </>
  );
}
