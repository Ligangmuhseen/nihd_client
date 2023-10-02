import React from 'react'

const FaqsForm2 = () => {
  return (
    <div>
         <div class="modal fade" id="faqsmodal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label for="headingInput">Question</label>
                                    <input type="text" class="form-control" id="headingInput" placeholder="Enter a question" />
                                </div>
                                <div class="form-group">
                                    <label for="subheadingInput">Answer</label>
                                    <input type="text" class="form-control" id="subheadingInput" placeholder="Enter a answer" />
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

export default FaqsForm2