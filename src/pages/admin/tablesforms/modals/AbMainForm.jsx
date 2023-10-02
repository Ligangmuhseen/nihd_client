import React from 'react'

const AbMainForm = () => {
    return (
        <div>


<div class="modal fade" id="aboutmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="imageInput">Image</label>
                        <input type="file" class="form-control-file" id="imageInput"/>
                    </div>
                    <div class="form-group">
                        <label for="headingInput">Heading</label>
                        <input type="text" class="form-control" id="headingInput" placeholder="Enter heading"/>
                    </div>
                    <div class="form-group">
                        <label for="subheadingInput">Subheading</label>
                        <input type="text" class="form-control" id="subheadingInput" placeholder="Enter subheading"/>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>


        </div>
    )
}

export default AbMainForm