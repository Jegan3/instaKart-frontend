/*eslint-disable*/
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OverlayModal = ({
  show, onHide, centered, title, body, alert, alertClass, primary, secondary, onSubmitPrimary, onSubmitSecondary, footer,
}) =>
  <Modal
    show={show}
    onHide={onHide}
    backdrop="static"
    keyboard={false}
    animation
    centered={centered}
    bsSize={"lg"}
  >
    <Modal.Header className="no-border" closeButton={onHide}>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="justify-content-center"><p>
      
    IN NO EVENT SHALL INSTA-KART.COM, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES (EVEN IF INSTA-KART.COM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM ANY ASPECT OF YOUR USE OF THE WEBSITE OR THE SERVICE, INCLUDING WITHOUT LIMITATION WHETHER THE DAMAGES ARISE FROM USE OR MISUSE OF THE WEBSITE OR THE SERVICE, FROM INABILITY TO USE THE WEBSITE OR THE SERVICE, OR THE INTERRUPTION, SUSPENSION, MODIFICATION, ALTERATION, OR TERMINATION OF THE WEBSITE OR THE SERVICE. SUCH LIMITATION OF LIABILITY SHALL ALSO APPLY WITH RESPECT TO DAMAGES INCURRED BY REASON OF OTHER SERVICES OR PRODUCTS RECEIVED THROUGH OR ADVERTISED IN CONNECTION WITH THE WEBSITE OR THE SERVICE OR ANY LINKS ON THE WEBSITE, AS WELL AS BY REASON OF ANY INFORMATION, OPINIONS OR ADVICE RECEIVED THROUGH OR ADVERTISED IN CONNECTION WITH THE WEBSITE OR THE SERVICE OR ANY LINKS ON THEINSTA-KART.COM SITE. THESE LIMITATIONS SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW. YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT INSTA-KART.COM SHALL NOT BE LIABLE FOR USER SUBMISSIONS OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY USER OR THIRD PARTY AND THAT THE RISK OF HARM OR DAMAGE FROM THE FOREGOING RESTS ENTIRELY WITH YOU. The Website is controlled and offered by INSTA-KART.COM from its facilities in the United States of America. INSTA-KART.COM makes no representations or warranties that the Website is appropriate for use in other locations. Those who access or use the Website from other jurisdictions do so at their own volition and risk and are responsible for compliance with local law.
      </p></Modal.Body>
    {/* <Modal.Footer className="no-border">
      {alert && <span className={`w-100 text-center text-${alertClass}`}><p>{alert}</p></span>}
      <div className="mx-auto">
        {secondary && <Button variant="primary secondary-button" onClick={onSubmitSecondary}>{secondary}</Button>}
        {primary && <Button variant="primary primary-button" onClick={onSubmitPrimary} >{primary}</Button>}
      </div>
      {footer}
    </Modal.Footer> */}
  </Modal>

export default OverlayModal;