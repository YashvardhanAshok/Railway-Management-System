import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

# file_name = "data.html"
# directory = r"D:\downloads" 

# file_path = os.path.join(directory, file_name)

# if os.path.exists(file_path):
#     print("File exists at:", file_path)
# else:
#     print("File does not exist at:", file_path)


def mail():
        smtp_server = 'smtp.gmail.com'
        smtp_port = 587
        sender_email = 'tenderhunter01@gmail.com'
        sender_password = 'tsysgpxvpryjbied'  
        receiver_email = 'yashvardhan577@gmail.com'
        subject = 'You Have Some New Tenders'
        message =" result_string"

        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = subject
        msg.attach(MIMEText(message, 'plain'))

        try:
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()  # Start TLS encryption
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, msg.as_string())
            print('Email sent successfully')
        except Exception as e:
            print(f'Error sending email: {e}')
        finally:
            server.quit()

# mail()