import React from "react";
import blogOne from "../../images/blogImg/blog1.png";
import nodeMongo from "../../images/blogImg/nodeMongo.png";
import blog3 from "../../images/blogImg/nosql-vs-sql.webp";
import blog4 from "../../images/blogImg/blog4.png";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="blog-bg">
      <div className="container py-5" style={{ minHeight: "80vh" }}>
        <div className="text-center">
          <p className="mb-0 pb-0 sub-header">FEATURED BLOGS</p>
          <h2>Latest Blog</h2>
        </div>
        <div>
          <div className="row my-5">
            <div className="col-lg-6">
              <div className="card" style={{ height: "32rem" }}>
                <div className="p-3" style={{ height: "10rem" }}>
                  <img
                    src={nodeMongo}
                    className="card-img-top img-fluid w-100"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <div>
                      <h6>When should you use node.js ?</h6>
                      <p>
                        Node. js is primarily used for non-blocking,
                        event-driven servers, due to its single-threaded nature.
                        It's used for traditional web sites and back-end API
                        services, but was designed with real-time, push-based
                        architectures in mind.
                      </p>
                    </div>

                    <div>
                      <h6>when should you use mongodb ?</h6>
                      <p>
                        {" "}
                        NoSQL databases like MongoDB are a good choice when your
                        data is document-centric and doesn't fit well into the
                        schema of a relational database, when you need to
                        accommodate massive scale, when you are rapidly
                        prototyping, and a few other use cases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card" style={{ height: "32rem" }}>
                <div className="p-3" style={{ height: "10rem" }}>
                  <img src={blogOne} className="card-img-top w-100" alt="..." />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <table className="table">
                      <thead>
                        <tr className="text-center">
                          <th scope="col">JavaScript</th>
                          <th scope="col">Node.js</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="fw-bold">1.</span> It is a
                            programming language. We use JS mainly to write
                            scripts on a website that makes web pages more
                            dynamic in nature.
                          </td>
                          <td>
                            <span className="fw-bold">1.</span> It is a runtime
                            environment for Javascript that lets a user run this
                            programming language on the server-side as well.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {" "}
                            <span className="fw-bold">2.</span> We can only run
                            JS on browsers.
                          </td>
                          <td>
                            <span className="fw-bold">2.</span> NodeJS helps us
                            run JS outside the browser as well.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="fw-bold">3.</span> It runs mainly
                            on the client-side. Thus, it is used in the
                            development of the front end.
                          </td>
                          <td>
                            <span className="fw-bold">3.</span> It runs on the
                            server-side. Thus, it helps in the server-side
                            development via the JS.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-6">
              <div className="card" style={{ height: "32rem" }}>
                <div className="p-3" style={{ height: "10rem" }}>
                  <img
                    src={blog3}
                    className="card-img-top img-fluid w-100"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="card-title">
                      Differences between SQL and NOSQL databases.
                    </h6>
                    <p>
                      1. SQL databases are relational, NoSQL databases are
                      non-relational.
                    </p>
                    <p>
                      2. SQL databases use structured query language and have a
                      predefined schema. NoSQL databases have dynamic schemas
                      for unstructured data.
                    </p>
                    <p>
                      3. SQL databases are vertically scalable, while NoSQL
                      databases are horizontally scalable
                    </p>
                    <p>
                      4. SQL databases are table-based, while NoSQL databases
                      are document, key-value, graph, or wide-column stores.
                    </p>
                    <p>
                      5. SQL databases are better for multi-row transactions,
                      while NoSQL is better for unstructured data like documents
                      or JSON.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card" style={{ height: "32rem" }}>
                <div className="p-3" style={{ height: "10rem" }}>
                  <img src={blog4} className="card-img-top w-100" alt="..." />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <h5 className="card-title">
                      What is the purpose of JWT and how does it work ?
                    </h5>
                    <p>
                      JWT, or JSON Web Token, is an open standard used to share
                      security information between two parties — a client and a
                      server. Each JWT contains encoded JSON objects, including
                      a set of claims. JWTs are signed using a cryptographic
                      algorithm to ensure that the claims cannot be altered
                      after the token is issued.
                    </p>
                    <p>
                      JWTs differ from other web tokens in that they contain a
                      set of claims. Claims are used to transmit information
                      between two parties. What these claims are depends on the
                      use case at hand. For example, a claim may assert who
                      issued the token, how long it is valid for, or what
                      permissions the client has been granted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
