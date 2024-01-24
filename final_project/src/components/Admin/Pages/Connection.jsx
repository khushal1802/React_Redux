import Sidebar from './Sidebar';
import Navbar from './Navbar';
import "../admin.css";


function Connection() {
  
  return (
    <>
      <div>
        <Sidebar />
        <div id="wrapper">
          <Navbar />
          <div className="p-4">
            <section className="charts mt-4">
              <button
                type="button"
                class="button"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Add +
              </button>

              <div class="modal" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Registration</h4>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div class="modal-body">
                      <form>
                        First name:
                        <input type="text" id="fname" name="fname" />
                        <br />
                        Last name:
                        <br />
                        <input type="text" id="lname" name="lname" />
                        <br />
                        Password :~<input type="password"></input>
                        <br />
                        DoB :~<input type="date"></input>
                        <br />
                        Male :~ <input type="radio"></input>
                        <br />
                        Female :~ <input type="radio"></input>
                      </form>
                    </div>

                    <div class="modal-footer">
                      <input type="submit" class="vote" value="Submit" />

                      <button
                        type="button"
                        class="vote"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connection;