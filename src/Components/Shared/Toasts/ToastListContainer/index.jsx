import { useCallback } from "react"
import { useEffect } from "react/cjs/react.development"
import styled from "styled-components"
import { keyframes } from "styled-components"
// import { useIsMobile } from "../../../../Hooks/Client"

const ToastListContainer = ({ toastlist, setList }) => {
  // const isMobile = useIsMobile()
  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastlist.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList]
  );

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (toastlist?.length) {
  //         deleteToast(toastlist[0].id);
  //       }
  //     }, 5000);

  //     return () => {
  // 		if (toastlist) {
  //       clearInterval(interval);
  //     }
  //     };
  //   }, [toastlist, deleteToast]);

  return (
    <Container className={`container `}>
      {toastlist.map((toast, i) => (
        <Notification
          key={i}
          className={`toast`}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <ToastButton onClick={() => deleteToast(toast.id)}>X</ToastButton>
          <div>
            <Description>{toast.content}</Description>
          </div>
        </Notification>
      ))}
    </Container>
  );
}

const AnimationToast = keyframes`
    	from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
`
const Container = styled.div`
	display: flex;
	flex-direction: column-reverse;
	font-size: 14px;
	height: 40px;
	width: 500px;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	text-align: center;
	position: fixed;
	bottom: 40px;
	z-index: 10;
	animation-name: ${AnimationToast};
`
const Notification = styled.div`
	padding: 10px;
	margin-bottom: 1rem;
	box-shadow: 0 0 10px #999;
	opacity: 0.9;
	transition: 0.3s ease;

	&:hover {
		box-shadow: 0 0 12px #000;
		opacity: 1;
	}

	.toast {
		height: 50px;
		width: 365px;
		color: #fff;
		padding: 20px 15px 10px 10px;
	}
`
const Description = styled.p`
	margin: 0;
	text-align: left;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
	color: #ffffff;
`
const ToastButton = styled.button`
	float: right;
	background: none;
	border: none;
	color: #fff;
	opacity: 0.8;
	cursor: pointer;
`

// const ToastMainContainer = styled.div`
// 	@keyframes toast-in-right {
// 		from {
// 			transform: translateX(100%);
// 		}
// 		to {
// 			transform: translateX(0);
// 		}
// 	}
// `

export default ToastListContainer
