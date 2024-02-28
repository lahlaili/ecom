from odoo import models, fields, api
from num2words import num2words
import re


class MoveLine(models.Model):
    _inherit='account.move.line'
    site = fields.Integer('Site')
    need_vehicle = fields.Char('need_vehicle')

