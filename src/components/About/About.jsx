import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <h2 className={styles.text}>Hola! Me llamo Lucas Regner</h2>
      <h3 className={styles.text}>
        Soy el creador de esta pagina de Rick and Morty, te dejo una foto por
        aca:
      </h3>
      <p className={styles.text}>
        (Esto es la integracion del modulo dos en Soy Henry)
      </p>
      <img
        src="https://lh3.googleusercontent.com/uHatHXSTeRP2WZ7NFeTgmOFawVSf0DeWkQmIDA1_VlftZcMpMQsM7oZFV7srtFtH8dWi1SULW_4PXzfl4GTSGO28uyJV6XOcyVvGkmv4_XXqq6PWZzbWuAV_gEyWFBjX97RfNZH45DcJQTHuMXaWibL4p-1Fgh8eWN5LMojDzx9WFAIyMb-SO6jSUsJPukXDO_6oXeGLE9zCP8pZpKOM54bjPlTjU0tmjhl3M021T0fRsRTqhUJXtZeKHlY0DGC-gbUEabNSflEpSVQSG_J-K2woFzBd2scg0-C27bQosh9CY9Ta60kAr9_N0t5DS8dLX-mEuiAwGZS8ZKdzwDgDgHa9QuIOMIdHon8KL149F6_REKPYyXJOHl_XBmajLedHPYYdS-0qhokeq7EJ2mVistzXC2Pw6AdxDbyFehg0xukfwhjOIntnNy9NufGn7oqwIr1AoZK47UvnEn90ZiJnhNqKvRt8EUVj7nU3WHWX7c_17q2nYxnsJvRN-Z2_Yhw0dqSZ_6X3ZD-LY6-S9DMRAvaiJEUcatnLC8564GAmHWwzxcNUB90n-20mCXVoRAWvcn9d_9jnVza2nZvinwAshoPnxHlDa-Fa81ptml8_USsWgyuQ4vJSFP59fexY3ZCvGtS_lUoj-TyJhAFyWNZLe4Qo0Fu3voZ6lP04ETldPp-9suRknYaOWIvv4KeIeGrR8-Tyvsdh46ot0jM6QuMOUc5cVWkYWFqL4X_7ipPZPkBzD7s0plufHSYge8c3V0aHYpHQLgagMArpH_NSbC-rK7Nqq7sMkPA6HFLh12CeVB-ddY4uokU8lc8uzlDn-XPKOBn4DNdJUbjrEXCLu9majMOsiP5JzH8hHlTyPhbFq_mUz8ayGgO8NfAQD-kss8hA1w7p0UVLaHm8FxpkIxSVFnF8YRvwtjX1bNYt-UYvKy2gfTxR_WVqDxdbYyVDJzDGN7mlmHJbHfPTld2xMeBiSY4kQ9mmOPGCcCkhX5zpFTIwn1WaN5Nn-g=w529-h939-no?authuser=1"
        alt="Yo con un matesuli"
        width={400}
        height={600}
      />
    </div>
  );
};

export default About;
