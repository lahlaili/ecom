# crm_custom/__manifest__.py

{
    'name': 'oi custum',
    'version': '3.2',
    'summary': 'Customizations for the CRM module',
    'author': 'Your Name',
    'website': 'https://www.example.com',
    'category': 'Customer Relationship Management',
    'depends': ['base','sale','purchase'],
    'data': [
        'views/view.xml',

        'reports/report.xml',
    ],
    'installable': True,
    'application': True,
    'auto_install': False,
}
