import React from 'react';
import Form  from 'react-bootstrap/Form';


function ViewMoreSearch({searchState}) {

    
    
    return (
        <div className = "search viewMore">
            <Form>
                <Form.Group className = "viewMore__form">
                     <Form.Control className = "search__input viewMore__input" name = "placeName"  type="text"  onChange={data => searchState(data)} placeholder="Find your booking here" />
                </Form.Group>               
            </Form>
        </div>
    );
}

export default ViewMoreSearch;