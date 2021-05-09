import React, { Component } from 'react';
//import Plot from 'react-plotly.js'
import BarGraph from '../BarGraph';
import * as FirestoreService from '../firebase';



class dashboard extends Component {
    constructor(props) {
    super(props);
    this.state = {response : ""};
  }
  
  componentDidMount() {
    this.state = {reponse: FirestoreService.getResponses('additionalInfoForFinal')};
  }
    render() {

        return (
  <div class="wrapper ">
    <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">

      <div class="logo"><a href="./profile" class="simple-text logo-normal">
         <var><img src = "./avatar.png" height = "40" width = "40"></img> Kim Smith </var>
        </a></div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item active">
            <a class="nav-link" href="./profile.html">
              <i class="material-icons">content_paste</i>
              <p>Cmpe133</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="./profile.js">
              <i class="material-icons">content_paste</i>
              <p>CS151</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="./tables.html">
              <i class="material-icons">content_paste</i>
              <p>CMPE146</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="./tables.html">
              <i class="material-icons">content_paste</i>
              <p>ENGR195B</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="./profile">
              <i class="material-icons">person</i>
              <p>User Profile </p>
            </a>
          </li>

          <li class="nav-item ">
            <a class="nav-link" href="./ContactUs">
              <i class="material-icons">language</i>
              <p>Contact Us</p>
            </a>
          </li>

          <li class="nav-item ">
            <a class="nav-link" href="./">
              <i class="material-icons">logout</i>
              <p>Sign Out </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel">
      
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="javascript:;"><b>Dashboard</b></a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <form class="navbar-form">
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search Class..."/>
                <button type="submit" class="btn btn-white btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="javascript:;">
                  <i class="material-icons">dashboard</i>
                  <p class="d-lg-none d-md-block">
                    Stats
                  </p>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">person</i>
                  <p class="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                  </div>
                  <p class="card-category">CSU</p>
                  <h3 class="card-title">San Jose State University
                    <small></small>
                  </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <a href="javascript:;">Powering Silicon Valley</a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-success">
                  <div class="ct-chart" id="dailySalesChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Hours Devoted to Course</h4>
                  <BarGraph type = "pie"  attribute = "hoursSpent" title = "Hours Spent" class="center" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-warning">
                  <div class="ct-chart" id="websiteViewsChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Did the homework help you understand the material?</h4>
                  <BarGraph type = "pie" attribute = "understanding" title = "Material Understanding" class="center" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-danger">
                  <div class="ct-chart" id="completedTasksChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">How difficult did you find this week's homework assignment? </h4>
                  <BarGraph type = "bar" yaxis = "# of Student Responses" xaxis = "1-5, 1 = very difficult and 5 = easy to understand" attribute = "difficulty" title = "Homework Difficulty" class="center" />
                </div>
              </div>
            </div>
          </div>
                 <div class="row">
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-success">
                  <div class="ct-chart" id="dailySalesChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">How did you perform on the quiz?</h4>
                  <BarGraph type = 'pie' attribute = "quizScore" title = "Quiz Performance" class="center" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-warning">
                  <div class="ct-chart" id="websiteViewsChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Did you see an improvement in your quiz score this week versus last week?</h4>
                  <BarGraph type = 'pie' attribute = "improvement" title = "Quiz Improvement" class="center" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-danger">
                  <div class="ct-chart" id="completedTasksChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Did the lecture prepare you for the quiz? </h4>
                  <BarGraph type = 'bar' attribute = "lecturePrep" title = "Lecture Preparation" class="center" />
                </div>
              </div>
            </div>
          </div>
        <div class="row">
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-success">
                  <div class="ct-chart" id="dailySalesChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Did the homework assignment prepare you for the quiz? </h4>
                  <BarGraph type = 'bar' attribute = "homeworkPrep" title = "Homework Preparation" class="center" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-warning">
                  <div class="ct-chart" id="websiteViewsChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">How do you feel you did on the midterm?</h4>
                  <BarGraph type = 'pie' attribute = "midtermScore" title = "Midterm Prediction" class="center" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-danger">
                  <div class="ct-chart" id="completedTasksChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Did you feel prepared for the midterm? </h4>
                  <BarGraph  type = 'bar' attribute = "prepared" title = "Midterm Preparedness" class="center"  />
                </div>
              </div>
            </div>
          </div>
                <div class="row">
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-success">
                  <div class="ct-chart" id="dailySalesChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Did the quizzes prepare you for the midterm?  </h4>
                  <BarGraph  type = 'bar' attribute = "midQuizPrep" title = "Quiz Preparation (Midterm)" class="center"  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-warning">
                  <div class="ct-chart" id="websiteViewsChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">How many hours did you study for this midterm?</h4>
                  <BarGraph type = 'pie' attribute = "midtermHours" title = "Hours Studying (Midterm)" class="center" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-danger">
                  <div class="ct-chart" id="completedTasksChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">What score did you get on the midterm?  </h4>
                  <BarGraph type = 'bar' attribute = "yourMidtermScore" title = "Midterm Scores" class="center" />
                </div>
              </div>
            </div>
          </div>
                        <div class="row">
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-success">
                  <div class="ct-chart" id="dailySalesChart"></div>

                </div>

                <div class="card-body">
                  <h4 class="card-title">How do you feel you did on the final? </h4>
                  <BarGraph type = 'bar' attribute = "finalScore" title = "Final Score Prediction" class="center" />
                  <p class="card-category">
                    </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-warning">
                  <div class="ct-chart" id="websiteViewsChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Did you feel prepared for the final? </h4>
                  <BarGraph type = 'pie' attribute = "preparedForFinal" title = "Final Preparedness" class="center" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-danger">
                  <div class="ct-chart" id="completedTasksChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Did the lecture prepare you for the final?  </h4>
                  <BarGraph type = 'bar' attribute = "finLecturePrep" title = "Final Preparation (Lecture)" class="center" />
                </div>
              </div>
            </div>
          </div>
                                <div class="row">
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-success">
                  <div class="ct-chart" id="dailySalesChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Did the homework prepare you for the final?</h4>
                  <BarGraph type = 'bar' attribute = "finHomeworkPrep" title = "Final Preparation (Homework) " class="center" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-warning">
                  <div class="ct-chart" id="websiteViewsChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Did the quizzes prepare you for the final?  </h4>
                  <BarGraph type = 'pie' attribute = "finQuizPrep" title = "Final Preparation (Quiz)" class="center" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-danger">
                  <div class="ct-chart" id="completedTasksChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">Did the midterm prepare you for the final? </h4>
                  <BarGraph type = 'bar' attribute = "finMidtermPrep" title = "Final Preparation (Midterm)" class="center" />
                </div>
              </div>
            </div>
          </div>
            <div class="row">
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-success">
                  <div class="ct-chart" id="dailySalesChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">How many hours did you study for this final?</h4>
                  <BarGraph type = 'pie' attribute = "finalHours" title = "Hours Studying (Final)" class="center" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-chart">
                <div class="card-header card-header-warning">
                  <div class="ct-chart" id="websiteViewsChart"></div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">What score did you get on the final? </h4>
                  <BarGraph type = 'pie' attribute = "yourFinalScore" title = "Final Score" class="center" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="card">
                <div class="card-header card-header-tabs card-header-primary">
                  <div class="nav-tabs-navigation">
                    <div class="nav-tabs-wrapper">
                      <span class="nav-tabs-title">What else would have helped you prepare for the midterm?</span>
                      <ul class="nav nav-tabs" data-tabs="tabs">
                        <li class="nav-item">
                        </li>
                        <li class="nav-item">
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            
                <div class="card-body">
                  <div class="tab-content">
                    <div class="tab-pane active" id="profile">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox" value=""/>
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id = "response">{}</td>
                            <td class="td-actions text-right">
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox" value=""/>
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id = "response">ADD STUDENT RESPONSE</td>
                            <td class="td-actions text-right">
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox" value=""/>
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id = "response">ADD STUDENT RESPONSE
                            </td>
                            <td class="td-actions text-right">
                           
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox" value="" />
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id = "response">ADD STUDENT RESPONSE</td>
                            <td class="td-actions text-right">
                            </td>
                          </tr>
                                                    <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox" value=""/>
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id = "response">{}</td>
                            <td class="td-actions text-right">
                            </td>
                          </tr>
                                                    <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox" value=""/>
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id = "response">{}</td>
                            <td class="td-actions text-right">
                            </td>
                          </tr>
                                                    <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox" value=""/>
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id = "response">{}</td>
                            <td class="td-actions text-right">
                            </td>
                          </tr>
                                                    <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox" value=""/>
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id = "response">{}</td>
                            <td class="td-actions text-right">
                            </td>
                          </tr>
                                                    <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox" value=""/>
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id = "response">{}</td>
                            <td class="td-actions text-right">
                            </td>
                          </tr>
                                                    <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox" value=""/>
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id = "response">{}</td>
                            <td class="td-actions text-right">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="tab-pane" id="messages">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input class="form-check-input" type="checkbox" value="" checked/>
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        );

    }
} export default dashboard;