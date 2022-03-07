INSERT INTO users(idade, nome, email) VALUES(
    20,
    "Xande",
    "xande@gmail.com.br"
);

UPDATE users SET idade = 8 WHERE nome = "Yudi Takeda";


SELECT * FROM users WHERE idade > 18;