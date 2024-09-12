import React from 'react';


const CardContent = (props) => {
  // Define your inline CSS styles as JavaScript objects
  const cardStyles = {
    maxWidth: '400px', // Example: set a maximum width for the card
    height:"700px",
    margin: '0 auto',  // Example: center the card horizontally
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const listStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    listStyle: 'none',
    padding: '0',
  };

  const listItemStyles = {
    flexBasis: 'calc(50% - 10px)', // Adjust as needed
    marginBottom: '10px', // Adjust as needed
  };

  const hrStyles = {
    border: 'none',
    borderTop: '1px solid black',
    margin: '10px 0', // Adjust as needed
  };

  return (
    <div style={cardStyles}>
      <img src={props.img} className="card-img-top" alt="..." style={{width:"100px"}}/>
      <div className="card-body" style={{height:"170px"}}>
        <h5 className="card-title text-center">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
      </div>
      <hr style={hrStyles} /> {/* Horizontal line */}
      <ul style={listStyles}>
        <li className="list-group-item text-center">
          <h4>{props.headlist}</h4>
        </li><br/>
        <ul>{props.lists}</ul>
        <li style={listItemStyles}>{props.l1}</li>
        <li style={listItemStyles}>{props.l2}</li>
        <li style={listItemStyles}>{props.l3}</li>
        <li style={listItemStyles}>{props.l4}</li>
        <li style={listItemStyles}>{props.l5}</li>
        <li style={listItemStyles}>{props.l6}</li>
        <li style={listItemStyles}>{props.l7}</li>
        <li style={listItemStyles}>{props.l8}</li>
      </ul>
      <div className="card-body">
        {props.readmore}
      </div>
     
    </div>









  );
};

export default CardContent;



