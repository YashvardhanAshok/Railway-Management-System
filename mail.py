import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from bs4 import BeautifulSoup
import re
import json
import time


file_name = "invoce.html"
directory = r"D:\downloads" 

file_path = os.path.join(directory, file_name)
a = True
while a:
    if os.path.exists(file_path):
        def mail(email_value, file):
            smtp_server = 'smtp.gmail.com'
            smtp_port = 587
            sender_email = 'tenderhunter01@gmail.com'
            sender_password = 'tsysgpxvpryjbied'  
            receiver_email = email_value
            subject = 'RAILWAY-MANAGEMENT-SYSTEM'
            message = file

            msg = MIMEMultipart()
            msg['From'] = sender_email
            msg['To'] = receiver_email
            msg['Subject'] = subject
            msg.attach(MIMEText(message, 'html'))  # Changed 'plain' to 'html'

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
        a = False    

        def mail(email_value, file):
            smtp_server = 'smtp.gmail.com'
            smtp_port = 587
            sender_email = 'tenderhunter01@gmail.com'
            sender_password = 'tsysgpxvpryjbied'  
            receiver_email = email_value
            subject = 'RAILWAY-MANAGEMENT-SYSTEM'
            message = file

            msg = MIMEMultipart()
            msg['From'] = sender_email
            msg['To'] = receiver_email
            msg['Subject'] = subject
            msg.attach(MIMEText(message, 'html'))  # Changed 'plain' to 'html'

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
        a = False  
        
        def mail(email_value, file):
            smtp_server = 'smtp.gmail.com'
            smtp_port = 587
            sender_email = 'tenderhunter01@gmail.com'
            sender_password = 'tsysgpxvpryjbied'  
            receiver_email = email_value
            subject = 'RAILWAY-MANAGEMENT-SYSTEM'
            message = file

            msg = MIMEMultipart()
            msg['From'] = sender_email
            msg['To'] = receiver_email
            msg['Subject'] = subject
            msg.attach(MIMEText(message, 'html'))  # Changed 'plain' to 'html'

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
        a = False  
        
        def mail(email_value, file):
            smtp_server = 'smtp.gmail.com'
            smtp_port = 587
            sender_email = 'tenderhunter01@gmail.com'
            sender_password = 'tsysgpxvpryjbied'  
            receiver_email = email_value
            subject = 'RAILWAY-MANAGEMENT-SYSTEM'
            message = file

            msg = MIMEMultipart()
            msg['From'] = sender_email
            msg['To'] = receiver_email
            msg['Subject'] = subject
            msg.attach(MIMEText(message, 'html'))  # Changed 'plain' to 'html'

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
        a = False  
        
        def mail(email_value, file):
            smtp_server = 'smtp.gmail.com'
            smtp_port = 587
            sender_email = 'tenderhunter01@gmail.com'
            sender_password = 'tsysgpxvpryjbied'  
            receiver_email = email_value
            subject = 'RAILWAY-MANAGEMENT-SYSTEM'
            message = file

            msg = MIMEMultipart()
            msg['From'] = sender_email
            msg['To'] = receiver_email
            msg['Subject'] = subject
            msg.attach(MIMEText(message, 'html'))  # Changed 'plain' to 'html'

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
        a = False  

        if os.path.exists(file_path):
            with open(file_path, "r") as file:
                file = file.read()

        soup = BeautifulSoup(file, "html.parser")

        payment_no_div = soup.find("div", class_="Payment_No")
        payment_date_div = soup.find("div", class_="Payment_Date")

        values = {
            "PNR_Number": payment_date_div.find_all("b")[0].text,
            "Train_Name": payment_date_div.find_all("b")[1].text,
            "Departure_Station": payment_date_div.find_all("b")[2].text,
            "Arrival_Station": payment_date_div.find_all("b")[3].text,
            "Departure_Time": payment_date_div.find_all("b")[4].text,
            "Arrival_Time": payment_date_div.find_all("b")[5].text,
            "Duration": payment_date_div.find_all("b")[6].text,
            "Distance": payment_date_div.find_all("b")[7].text
        }

        comment_data = re.search(r"<!--(.*?)-->", file, re.DOTALL)

        if comment_data:
            comment_content = comment_data.group(1).strip()
            data_points = comment_content.split(',')
            keys = ["firstname", "lastname", "phone", "email"]
            extracted_data = dict(zip(keys, data_points))
            values.update(extracted_data)

        # for key, value in values.items():
            # print(f"{key}: {value}")

        file_path = "data_base/user_data.json"

        # Writing the dictionary to a JSON file
        with open(file_path, 'w') as json_file:
            json.dump(values, json_file, indent=4)

        email_value = values.get("email")
        mail(email_value,file)










    else:
        print("port:0082 is on ")




