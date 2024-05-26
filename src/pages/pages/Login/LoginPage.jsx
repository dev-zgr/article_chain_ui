import {MainWrapperComponent} from "../../../components/Wrappers/MainWrapperComponent";
import {Form, useActionData, useNavigate} from "react-router-dom";
import {InfoPageH1MetaComponent} from "../../../meta-components/InfoPage/InfoPageH1MetaComponent";
import {TextInputMetaComponent} from "../../../meta-components/form/inputs/TextInputMetaComponent";
import {API_CONFIG, MODAL_CODES} from "../../../config/config";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {InfoModalComponent} from "../../../components/modals/InfoModalComponent";
import {UIActions} from "../../../store/store/UISlice";
import {loginActions} from "../../../store/store/AccountDetailsSlice";
import {auth, firestore} from "../../../FirebaseConfig";


export const LoginPage = () => {
    const actionData = useActionData();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const UISlice = useSelector(state => state.UISlice);
    const accountSlice = useSelector(state => state.accountDetailsSlice);

    useEffect(() => {
        if (actionData?.status === 200) {
            dispatch(loginActions.login(actionData.account));
            dispatch(UIActions.showModal(MODAL_CODES.LOGIN_UI_ACTION_200));
            setTimeout(() => {
                dispatch(UIActions.hideModal());
                navigate("/");
            }, 2000);
        } else if (actionData?.status === 400) {
            dispatch(UIActions.showModal(MODAL_CODES.LOGIN_UI_ACTION_400));
        } else if (actionData?.status === 500) {
            dispatch(UIActions.showModal(MODAL_CODES.LOGIN_UI_ACTION_500));
        }
    }, [accountSlice, actionData, dispatch, navigate]);


    const toggleModal = () => {
        dispatch(UIActions.hideModal());
    }
    return (
        <>
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.LOGIN_UI_ACTION_500 &&
                <InfoModalComponent
                    header={"Internal Server Error"}
                    message={"Login failed, please try again later!"}
                    toggleModal={toggleModal}
                />
            }
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.LOGIN_UI_ACTION_400 &&
                <InfoModalComponent
                    header={"Invalid Credentials!"}
                    message={"Login failed, please try again!"}
                    toggleModal={toggleModal}
                />
            }
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.LOGIN_UI_ACTION_200 &&
                <InfoModalComponent
                    header={"You've Logged in Successfully"}
                    message={"We're redirect you to home page, Welcome!"}
                    toggleModal={toggleModal}
                />

            }
            <MainWrapperComponent>


                <div className={"col-start-3 col-end-7 px-20"}>
                    <Form method={"POST"}
                          className={"col-start-3 col-end-9 border border-slate-200 rounded-3xl overflow-hidden shadow-xl p-10"}>
                        <InfoPageH1MetaComponent>🔓Login</InfoPageH1MetaComponent>
                        <TextInputMetaComponent name={"email"} label={"Email"} type={"text"}
                                                placeholder={"Username"}
                                                validator={() => true}/>
                        <TextInputMetaComponent name={"password"} label={"Password"} type={"password"}
                                                placeholder={"Username"} validator={() => true}/>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                className={"rounded-md bg-sky-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>🔐Login
                            </button>
                        </div>
                    </Form>
                </div>

            </MainWrapperComponent>
        </>

    )
}

export async function action({request}) {

    const formData = await request.formData();
    let result = {
        status: 0,
        account: null
    }
    try{
        await auth.signInWithEmailAndPassword(formData.get("email"), formData.get("password"));
        const user = auth.currentUser;
        if (user && user.emailVerified) {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = firestore.collection('users').doc(user.uid);
                const userDoc = await userDocRef.get();
                if (userDoc.exists) {
                        result.status = 200;
                        result.account = {
                            userName: userDoc.data().name,
                            email: userDoc.data().email,
                            researchField: userDoc.data().researchField,
                        }
                }
            }
        } else {
            result.status = 500;
            result.account = {};
        }
    }catch (error) {
        result.status = 400;
        result.account = {};
    }
    return result;
}


/*

[2:29 pm, 23/05/2024] Kutay Kaan: import firebase from 'firebase/compat/app'; // Firebase v9 veya sonraki sürümleri için
import 'firebase/compat/auth'; // Firebase Authentication modülü
import 'firebase/compat/firestore'; // Firebase Firestore modülü

// Firebase yapılandırma bilgileri
const firebaseConfig = {
    apiKey: "AIzaSyBA68Ps3PVaQUaCbcvq1NXhZw-y-Kt_hLg",
    authDomain: "articlechainfirebase.firebaseapp.com",
    projectId: "articlechainfirebase",
    storageBucket: "articlechainfirebase.appspot.com",
    messagingSenderId: "174968139743",
    appId: "1:174968139743:web:adf9fa3611d96f616e1e6a"
};

// Firebase uygulamasını başlatma
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firebase Authentication ve Firestore gibi servisleri kullanmak için referanslar oluşturma…
[2:32 pm, 23/05/2024] Kutay Kaan: const handleLogin = async () => {
    try {
      setError('');
      await auth.signInWithEmailAndPassword(email, password);
      const user = auth.currentUser;

      if (user && user.emailVerified) {
        console.log('Başarılı bir şekilde giriş yapıldı');
        navigate('/');
      } else {
        setError('E-posta adresiniz henüz doğrulanmamış. Lütfen e-posta adresinizi kontrol ederek doğrulama işlemi yapınız.');
        auth.signOut();
      }
    } catch (error) {
        switch (error.code) {
            case 'auth/user-not-found':
              setError('User not found. Please enter a registered email address and password.');
              break;
            case 'auth/invalid-email':
              setError('Invalid email address. Please enter a valid email address.');
              break;
            case 'auth/wrong-password':
              setError('Incorrect password. Please enter the correct password.');
              break;
            default:
              setError('Login failed. Please try again.');
              break;
          }
      console.error('Giriş yapılamadı:', error);
    }
  };
 */




/*

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = firestore.collection('users').doc(user.uid);
          const userDoc = await userDocRef.get();

          if (userDoc.exists) {
            setUserData(userDoc.data());
          } else {
            console.log('Kullanıcı belgesi bulunamadı.');
          }
        }
      } catch (error) {
        console.error('Kullanıcı bilgilerini alma hatası:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }
 */