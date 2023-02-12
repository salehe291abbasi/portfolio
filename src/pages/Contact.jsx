import { Card , CardContent , Divider , Chip, Typography  ,Fade, Box ,CardActions , Button, TextField, InputAdornment, CardActionArea  } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { ContactPhoneRounded, EmailRounded, FaceRounded, SubjectRounded  , AccountCircleRounded } from "@mui/icons-material"
import {Helmet} from "react-helmet-async"
import MapSvg from "../assets/map.svg"
import { useEffect, useState } from "react"
import { useTheme } from "@mui/material/styles"
import emailjs from 'emailjs-com';
const Contact = ({helmetTitle})=>{
    const [loading , setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: ''
      });
      const [status, setStatus] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_uiqbta9', 'template_4gbc5nt', values, 'fjJiv1DvEtsEuPO6A')
          .then(response => {
            console.log('SUCCESS!', response);
            setValues({
              fullname: '',
              email: '',
              subject: '',
              message: ''
            });
            setStatus('SUCCESS');
          }, error => {
            console.log('FAILED...', error);
          });
      }
    
      useEffect(() => {
        if(status === 'SUCCESS') {
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
      }, [status]);
    
      const handleChange = (e) => {
        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value
        }))
      }
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    const theme = useTheme()
    useEffect(()=>{
        setLoading(true)
    },[])
    return (

        <>
            <Card sx={{background:`url(${require("../assets/20.jpg")})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative", height:"100vh",
                pt:1,
                overflowY:"auto",
                overflowX:"hidden"}} >
                    <Helmet>
                        <title>{helmetTitle}</title>
                    </Helmet>
                    <CardContent>
                    <Fade  in={loading} style={{ transitionDelay: loading? '500ms' : '0ms' }}>
                            <Divider textAlign="center" sx={{"&::after,&::before":{borderColor:"warning.main"} , mb:4}}><Chip color="warning" label={<Typography color="text.primary" variant="h6">ارتباط با ما</Typography>} sx={{p:2.5}} icon={<AccountCircleRounded color="inherit"/>} /></Divider>
                    </Fade>  
                    <Grid container>
                        
                        <Grid xs={12}  sm={8}>
                            
                                <Card sx={{width:0.8}}>
                                    <form autoComplete="off" onSubmit={handleSubmit}>
                                        <CardContent>
                                            <Grid container>
                                                <Grid xs={12} sx={{direction:"ltr"}}>
                                                    <Grid container spacing={2}>
                                                        <Grid xs={12} md={6}>
                                                            <TextField 
                                                            fullWidth
                                                            onChange={handleChange}
                                                            name="fullname"
                                                            variant="outlined"
                                                            label="نام و نام خانوادگی"
                                                            color="warning"
                                                            size="small"
                                                            InputProps={{
                                                                endAdornment:(
                                                                    <InputAdornment position="end">
                                                                        <FaceRounded />
                                                                    </InputAdornment>
                                                                )
                                                            }}
                                                            />
                                                        </Grid>
                                                        <Grid xs={12} md={6}>
                                                            <TextField 
                                                                onChange={handleChange}
                                                                fullWidth
                                                                name="email"
                                                                label="ایمیل"
                                                                size="small"
                                                                color="warning"
                                                                variant="outlined"
                                                                InputProps={{
                                                                    endAdornment:(
                                                                        <InputAdornment position="end">
                                                                            <EmailRounded />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid xs={12} md={12}>
                                                                <TextField 
                                                                    onChange={handleChange}
                                                                    name="subject"
                                                                    label="عنوان"
                                                                    color="warning"
                                                                    variant="outlined"
                                                                    size="small"
                                                                    InputProps={{
                                                                        endAdornment:(
                                                                            <InputAdornment position="end">
                                                                                <SubjectRounded />
                                                                            </InputAdornment>
                                                                        )
                                                                    }}
                                                                />
                                                        </Grid>
                                                        <Grid xs={12} md={12}>
                                                            <TextField 
                                                                onChange={handleChange}
                                                                fullWidth
                                                                multiline
                                                                rows={6}
                                                                name="message"
                                                                label="متن پیام"
                                                                variant="outlined"
                                                                color="warning"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions sx={{alignItems:"center" , justifyContent:"flex-end",p:1,m:1}}>
                                            <Button 
                                                type="submit"
                                                color="success"
                                                variant="contained"
                                                sx={{mt:2 , px:10 , color:"text.primary"}}
                                            >
                                                ارسال
                                            </Button>
                                        </CardActions>
                                    </form>
                                </Card>
                         
                        </Grid>
                        <Grid xs={12} sm={4} >
                            <Box component="img" src={MapSvg} ></Box>
                           <Typography variant="body1" color="text.black" sx={{mr:15}}>اگه کاری داری باهام</Typography>
                           <Typography variant="body1" color="text.black" sx={{mt:2}}>
                           👋{" "}
                           <a href="mailto:saleheabbasi313@gmail.com" alt="email" ><Typography sx={{display:"inline" ,color:"orange","&:focus":{color:"orangered"}}}>ایمیل</Typography></a>{" "}
                           بهم بزن  
                           </Typography>
                        </Grid>
                    </Grid>
                    </CardContent>
            </Card>
        </>
    )
}
export default Contact;
